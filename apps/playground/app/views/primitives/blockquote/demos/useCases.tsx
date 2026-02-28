import { Blockquote, Heading, Text } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Testimonial */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Testimonial</Heading>
        <Blockquote 
          variant="solid" 
          color="primary"
          showIcon
          citeSource="Sarah Johnson, CEO at TechCorp"
        >
          This product has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.
        </Blockquote>
      </div>

      {/* Article Quote */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Article Quote</Heading>
        <Text className="mb-4">
          In his famous speech, the author emphasized the importance of perseverance:
        </Text>
        <Blockquote color="secondary">
          Success is not final, failure is not fatal: it is the courage to continue that counts.
        </Blockquote>
        <Text className="mt-4">
          This message resonated with audiences worldwide.
        </Text>
      </div>

      {/* Warning/Note */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Important Note</Heading>
        <Blockquote variant="soft" color="warning">
          Please note that this feature is currently in beta. Some functionality may change before the final release.
        </Blockquote>
      </div>

      {/* Success Message */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Success Highlight</Heading>
        <Blockquote variant="solid" color="success">
          Your application has been successfully submitted. You will receive a confirmation email within 24 hours.
        </Blockquote>
      </div>

      {/* Error/Critical */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Critical Information</Heading>
        <Blockquote variant="soft" color="danger">
          Breaking changes: The API endpoint has been deprecated. Please migrate to the new v2 endpoint before March 2025.
        </Blockquote>
      </div>
    </div>
  );
}
