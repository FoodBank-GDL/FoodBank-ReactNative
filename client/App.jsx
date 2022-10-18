import { AuthProvider } from "./src/contexts/AuthContext";

import Routes from "./Routes";
export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
