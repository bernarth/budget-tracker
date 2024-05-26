"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GetForamtterForCurrency } from "@/lib/helpers";
import { Period, Trimeframe } from "@/lib/types";
import { UserSettings } from "@prisma/client";
import { useMemo, useState } from "react";

function History({ userSettings }: { userSettings: UserSettings }) {

  const [ tiemframe, setTimeframe ] = useState<Trimeframe>("month");
  const [ period, setPeriod ] = useState<Period>({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });

  const formatter = useMemo(() => {
    return GetForamtterForCurrency(userSettings.currency);
  }, [userSettings.currency])

  return (
    <div className="container">
      <h2 className="mt-12 text-3xl font-bold">History</h2>
      <Card className="col-span-12 mt-2 w-full">
        <CardHeader className="gap-2">
          <CardTitle className="grid grid-flow-row justify-between gap-2 md:grid-flow-col">
            {/* TODO: Until here we did for history. We are in 3:11:26 exactly go back for Dashboard page: history section */}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default History;