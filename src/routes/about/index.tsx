import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>travel back home</p>
      <Link href="/">Home</Link>
      <div>
        <a href="/">Not LINK</a>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
