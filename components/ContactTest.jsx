import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ContactTest() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    const [successMessage, setSuccessMessage] = useState("");

    function onSubmit(data) {
        axios
            .post("https://eou7z9fhray9f4s.m.pipedream.net", data)
            .then((response) => {
                setSuccessMessage(
                "Thanks for your message! I'll get back to you soon."
            );
             })
            .catch((e) => console.error(e)); 
            

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Do you have questions?</h4>
            <input {...register("email")} defaultValue={"me@gmail.com"} >
            </input>

            <button role="submit"> {isSubmitting ? "Sending..." : "Submit"}
                </button>

        </form>
    );

}