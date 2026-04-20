import PalaceLegalPage from '../components/PalaceLegalPage';

export default function TermsPage() {
  return (
    <PalaceLegalPage 
      title="Terms of Stay"
      content={[
        "By staying at The Royal Palace, you agree to uphold the atmosphere of tranquility and mutual respect that defines our heritage. This includes adhering to our house rules regarding noise, photography in public areas, and smoking.",
        "Cancellations must be made at least 72 hours prior to arrival to avoid penalty. Special event bookings and peak season stays may have different requirements, which will be specified during your reservation.",
        "We reserve the right to refuse service to any guest whose conduct violates our community standards or endangers the preservation of the palace's architectural integrity."
      ]}
    />
  );
}
