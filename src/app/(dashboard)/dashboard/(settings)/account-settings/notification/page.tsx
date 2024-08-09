import { Switch } from "@components/ui/switch";

export default async function NotificationPage() {
  return (
    <section className={"w-full"}>
      <ul className={"v-stack gap-6 max-w-[550px]"}>
        <li className={"h-stack justify-between"}>
          <p className={"text-sm"}>Show notifications</p>
          <Switch />
        </li>
        <li className={"h-stack justify-between"}>
          <p className={"text-sm"}>Receive notifications for new uploads</p>
          <Switch />
        </li>
        <li className={"h-stack justify-between"}>
          <p className={"text-sm"}>Special offers and events</p>
          <Switch />
        </li>
      </ul>
    </section>
  );
}
