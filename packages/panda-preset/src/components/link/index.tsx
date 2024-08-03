"use client"

import React, { type ComponentProps } from "react"

import { default as NextLink } from "next/link"

import type { RecipeVariantProps } from "@pandacss/types"
import { styled } from "@qotum/panda-exports/jsx"
import { link } from "@qotum/panda-exports/recipes"
import { isString } from "../../utils/is-string"

export type LinkProps = RecipeVariantProps<typeof link> &
  ComponentProps<typeof NextLink>

const StyledLink = styled(NextLink, link)

const internalUrlRegex = /^(\/(?!\/)[A-z:0-9/#-]*)$/gi

const Link = React.forwardRef<HTMLInputElement, LinkProps>(
  (
    { href, onClick, disabled, visual, ...props }: LinkProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    disabled = disabled || (!onClick && !href)

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) return event.preventDefault()
      if (onClick) onClick(event)
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const renderLink = React.useCallback(
      (isInternal = true) => (
        <StyledLink
          href={href}
          onClick={handleClick}
          disabled={disabled}
          aria-disabled={disabled}
          visual={visual}
          ref={ref}
          {...(isInternal
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          {...props}
        />
      ),
      [href, onClick, disabled, visual, ref],
    )

    // If the href is an internal URL, we can use the Next.js Link component to handle Next.js routing navigation.
    if (isString(href) && !internalUrlRegex.test(href as string))
      return renderLink(false)

    return renderLink()
  },
)

Link.displayName = "Link"

export { Link }
