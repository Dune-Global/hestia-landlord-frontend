import { Sign } from "crypto";
import Image from "next/image";
import SignupForm from "./form";
import Container from "@/components/Container";

export default function Signup() {
  return (
    <Container>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex flex-col gap-3">
          <div className="lg:text-5xl md:text-4xl text-2xl font-extrabold text-center lg:text-left">
            List your properties.
          </div>
          <div className="md:text-2xl text-xl text-center lg:text-left">
            Reach hundreds of students by listing your properties on our
            platform{" "}
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row  justify-between">
          <div className="flex  h-[750px] justify-center ">
            <Image
              src={"/assets/images/signin_signup/image.png"}
              alt=""
              width={600}
              height={50}
              className=""
            ></Image>{" "}
          </div>
          <div className="flex  justify-center h-[750px]">
            <SignupForm />
          </div>
        </div>
      </div>
    </Container>
  );
}