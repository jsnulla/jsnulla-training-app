import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageTwo() {
  return (
    <Page>
      <TitleBar
        title="Page two"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Some Card Heading</Heading>
            <TextContainer>
              <p>Some Card Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Some Card Heading {new Date().toISOString()}</Heading>
            <TextContainer>
              <p>Some Cart Body {new Date().toISOString()}</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
