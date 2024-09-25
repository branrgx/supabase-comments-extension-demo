import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  CommentsProvider,
  Comments,
  AuthModal
} from "supabase-comments-extension";
import "./styles.css";

const SUPABASE_URL = "http://127.0.0.1:54321";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <CommentsProvider
      supabaseClient={supabase}
      onAuthRequested={() => setModalVisible(true)}
      onUserClick={(user) => window.alert(user.name)}
      mode="dark"
    >
      <AuthModal
        visible={modalVisible}
        onAuthenticate={() => setModalVisible(false)}
        onClose={() => setModalVisible(false)}
        redirectTo="https://8hg9s.csb.app/"
      />
      <Comments topic="dark-mode" />
    </CommentsProvider>
  );
}
