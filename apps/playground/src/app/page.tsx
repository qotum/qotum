import { Button } from "@qotum/panda-preset";
import { HStack, Stack, VStack } from "@qotum/panda-exports/jsx";
import { css } from "@qotum/panda-exports/css";
import { center } from "@qotum/panda-exports/patterns";

export default function Home() {
  return (
    <main>
      <VStack
        className={center({
          padding: "padding.MD",
        })}
      >
        <h1
          className={css({
            fontSize: "32px",
            fontWeight: "semibold",
          })}
        >
          Welcome to Qotum's{" "}
          <span
            className={css({
              color: "brand",
              fontWeight: "bold",
            })}
          >
            Playground
          </span>{" "}
          🎉
        </h1>
        <p
          className={css({
            maxWidth: "500px",
            textAlign: "center",
          })}
        >
          This is a place where you can test out the components and styles that
          we have built for you. Feel free to play around with the components
          and see how they can be used in your project.
        </p>
      </VStack>
      <VStack
        className={center({
          padding: "padding.MD",
        })}
      >
        <h2
          className={css({
            fontSize: "24px",
            fontWeight: "semibold",
            marginBottom: "16px",
          })}
        >
          Button style
        </h2>
        <Stack gap="10px" justify="center">
          <HStack gap="10px" justify="center">
            <Button>Primary</Button>
            <Button shadow={false}>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button radius="rounded">Rounded</Button>
            <Button radius="circle">Circle</Button>
            <Button size="S">Size S</Button>
            <Button size="XS">Size XS</Button>
          </HStack>
          <HStack gap="10px" justify="center">
            <Button visual="secondary">Secondary</Button>
            <Button visual="secondary" shadow={false}>
              Shadow false
            </Button>
            <Button visual="secondary" disabled>
              Disabled
            </Button>
            <Button visual="secondary" radius="rounded">
              Rounded
            </Button>
            <Button visual="secondary" radius="circle">
              Circle
            </Button>
            <Button visual="secondary" size="S">
              Size S
            </Button>
            <Button visual="secondary" size="XS">
              Size XS
            </Button>
          </HStack>
          <HStack gap="10px" justify="center">
            <Button visual="ghost">Ghost</Button>
            <Button visual="ghost" shadow={false}>
              Shadow disable
            </Button>
            <Button visual="ghost" disabled>
              Disabled
            </Button>
            <Button visual="ghost" radius="rounded">
              Rounded
            </Button>
            <Button visual="ghost" radius="circle">
              Circle
            </Button>
            <Button visual="ghost" size="S">
              Size S
            </Button>
            <Button visual="ghost" size="XS">
              Size XS
            </Button>
          </HStack>
          <HStack gap="10px" justify="center">
            <Button visual="dangerous">Dangerous</Button>
            <Button visual="dangerous" shadow={false}>
              Shadow disable
            </Button>
            <Button visual="dangerous" disabled>
              Disabled
            </Button>
            <Button visual="dangerous" radius="rounded">
              Rounded
            </Button>
            <Button visual="dangerous" radius="circle">
              Circle
            </Button>
            <Button visual="dangerous" size="S">
              Size S
            </Button>
            <Button visual="dangerous" size="XS">
              Size XS
            </Button>
          </HStack>
        </Stack>
      </VStack>
    </main>
  );
}
