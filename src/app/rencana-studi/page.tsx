import BaseLayout from "@/components/layouts/base-layout";
import { RencanaStudiModule } from "@/modules/rencana-studi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rencana Studi',
};


export default function RencanaStudiPage() {
  return(
    <main>
      <div className="min-h-screen w-full">
        <BaseLayout>
        <RencanaStudiModule/>
        </BaseLayout>
      </div>
    </main>
  )
}