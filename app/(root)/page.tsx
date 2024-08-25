import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

import { LoggedIn } from "@/constants";

import React from "react";
export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn.firstname || "Guest"}
            subtext="Empower your investments with seamless account management and real-time trading insights."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={LoggedIn.firstBank + LoggedIn.secondBank}
          />
        </header>
      </div>

      <RightSidebar
        user={LoggedIn}
        transactions={[]}
        banks={[
          { currentBalance: LoggedIn.firstBank },
          { currentBalance: LoggedIn.secondBank },
        ]}
      />
    </section>
  );
}
