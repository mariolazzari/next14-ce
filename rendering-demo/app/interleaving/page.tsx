import ClientComponentOne from "../components/ClientComponentOne";
import ServerComponentOne from "../components/ServerComponentOne";

function InterleavingPage() {
  return (
    <div>
      <h1>InterleavingPage</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
}

export default InterleavingPage;
