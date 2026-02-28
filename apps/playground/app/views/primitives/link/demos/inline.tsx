import { Link, Text  } from "@ninna-ui/primitives";


export default function Inline() {
  return (
    <div className="space-y-4">
      <Text>
        This is a paragraph with an <Link href="#">inline link</Link> that flows naturally with the text.
      </Text>
      <Text>
        You can read more about our <Link href="#" color="primary">privacy policy</Link> and <Link href="#" color="primary">terms of service</Link> on our website.
      </Text>
      <Text muted size="sm">
        For questions, contact us at <Link href="mailto:support@example.com" color="info">support@example.com</Link>.
      </Text>
    </div>
  );
}
