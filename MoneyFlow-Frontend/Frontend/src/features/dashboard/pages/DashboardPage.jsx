import { useState } from "react";
import { FiGrid, FiTrendingUp, FiTrendingDown, FiDollarSign, FiAlertCircle } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import PeriodSwitcher from "@/features/dashboard/components/PeriodSwitcher.jsx";
import StatCard from "@/features/dashboard/components/StatCard.jsx";
import CashFlowChart from "@/features/dashboard/components/CashFlowChart.jsx";
import CategoryBreakdownChart from "@/features/dashboard/components/CategoryBreakdownChart.jsx";
import AccountsOverview from "@/features/dashboard/components/AccountsOverview.jsx";
import RecentActivityList from "@/features/dashboard/components/RecentActivityList.jsx";
import KpiComparison from "@/features/dashboard/components/KpiComparison.jsx";
import SubscriptionBanner from "@/components/common/SubscriptionBanner.jsx";

export default function DashboardPage() {
  const [period, setPeriod] = useState("this-month");

  return (
    <div>
      <PageHeader
        icon={FiGrid}
        title="Welcome back, Sara"
        description="Here's your financial snapshot for this period"
        actions={<PeriodSwitcher active={period} onChange={setPeriod} />}
      />

      <div className="mb-6">
        <SubscriptionBanner />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FiTrendingUp} label="Total Income" value="$5,600" delta="+14.3% vs last month" trend="up" tone="teal" />
        <StatCard icon={FiTrendingDown} label="Total Expenses" value="$3,900" delta="-4.9% vs last month" trend="down" tone="indigo" />
        <StatCard icon={FiDollarSign} label="Net Balance" value="$1,700" delta="Healthy surplus" trend="up" tone="teal" />
        <StatCard icon={FiAlertCircle} label="Active Debts" value="$2,300" delta="Next due in 5 days" trend="down" tone="amber" />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <CashFlowChart />
        </div>
        <CategoryBreakdownChart />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <AccountsOverview />
        <RecentActivityList />
        <KpiComparison />
      </div>
    </div>
  );
}
