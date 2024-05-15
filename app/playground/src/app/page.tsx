import { css } from "../../styled-system/css"

export default function Home() {
  return (
    <main
      className={css({
        backgroundColor: "whitescale.100",
      })}
    >
      test APP
      <button
        type="submit"
        className={css({
          backgroundColor: "primary.content",
          _hover: { backgroundColor: "primary.content.hover" },
        })}
      >
        Bouton
      </button>
    </main>
  )
}
