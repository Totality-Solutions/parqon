import Section from "../components/common/Section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gray-100">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Our Company
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Enterprise-grade solutions for modern businesses
        </p>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border">Web Development</div>
          <div className="p-4 border">UI/UX Design</div>
          <div className="p-4 border">Cloud Solutions</div>
        </div>
      </Section>
    </>
  );
}