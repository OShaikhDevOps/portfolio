import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
// Mailchimp removed - newsletter not used
import { Posts } from "@/components/blog/Posts";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Blog – ${person.name}`,
    description: `Writing and posts by ${person.name}`,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={`Blog – ${person.name}`}
        description={`Writing and posts by ${person.name}`}
        path="/blog"
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Blog
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
  {/* Newsletter removed — Mailchimp not used */}
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
