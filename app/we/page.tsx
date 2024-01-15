import { Menu } from "../components/Menu";
import Section from "../components/Section";

export default function Page() {
  return (
    <div className="h-screen bg-stone-50">
      <Menu />
      <Section width="70%" height="400px">
        The data is
      </Section>
    </div>
  );
}
