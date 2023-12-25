import Link from "next/link";
import Card from "@/components/card";

function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}

export default Notifications;
