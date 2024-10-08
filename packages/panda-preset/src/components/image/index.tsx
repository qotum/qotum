"use client"

import { styled } from "@qotum/panda-exports/jsx"
import { image } from "@qotum/panda-exports/recipes"
import { default as NextImage } from "next/image"
import type { ComponentProps } from "react"
// biome-ignore lint/style/useImportType: <explanation>
import React from "react"

export type ImageProps = Exclude<ComponentProps<typeof NextImage>, "fill">

const StyledImage = styled(NextImage, image)

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  ...props
  // @ts-ignore
}: ImageProps) => <StyledImage src={src} alt={alt} {...props} />

export { Image }
