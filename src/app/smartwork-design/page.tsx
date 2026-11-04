import { SmartWorkLanding } from "@/components/SmartWorkLanding";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "SmartWork Design Skill",
  description: "Explore SmartWork Design Skill through an AI collaboration workflow, live components, and code-native design rules.",
  path: "/smartwork-design",
});

export default function SmartWorkDesignPage() {
  return <SmartWorkLanding />;
}
