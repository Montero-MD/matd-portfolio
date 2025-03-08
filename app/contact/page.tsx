import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's work together",
};

export default function ContactPageWrapper(){
	return <ContactPage/>
}