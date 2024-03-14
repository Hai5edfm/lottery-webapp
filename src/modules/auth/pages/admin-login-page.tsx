import Image from "next/image"

import LoginForm from "@/modules/auth/components/login-form"

function AdminLoginPage() {
  return (
    <section className="grid h-screen place-items-center p-4">
      {/* CONTENT WRAPPER */}
      <div className="flex w-[min(100%,361px)] flex-col gap-8 ">
        {/* IMAGE CONTAINER */}
        <div className="relative m-auto aspect-[320/316] w-[min(100%,320px)]">
          <Image src="/images/gift_devi_3_1.png" alt="login" fill />
        </div>

        {/* FORM */}
        <LoginForm />
      </div>
    </section>
  )
}
export default AdminLoginPage
