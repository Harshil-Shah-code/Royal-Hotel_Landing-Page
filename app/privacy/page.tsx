import PalaceLegalPage from '../components/PalaceLegalPage';

export default function PrivacyPage() {
  return (
    <PalaceLegalPage 
      title="Privacy Policy"
      content={[
        "At The Royal Palace, we are committed to safeguarding your personal data with the same level of care and discretion that we apply to your stay. This policy outlines how we collect, use, and protect your information.",
        "We collect information necessary to personalize your experience, including your preferences, booking details, and concierge requests. We never share your data with third parties for marketing purposes.",
        "Our digital vault uses state-of-the-art encryption to ensure that your private details remain private. For any inquiries regarding your data, please contact our data concierge."
      ]}
    />
  );
}
