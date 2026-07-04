import { useEffect, useState } from "react";

import {
  Users,
  Package,
  Truck,
  Building2
} from "lucide-react";

import DashboardCard from "./DashboardCard";

import api from "../../services/api";

function StatsGrid() {

  const [stats,setStats]=useState({

      mealsSaved:0,
      users:0,
      ngos:0,
      deliveries:0

  });

  useEffect(()=>{

      loadStats();

  },[]);

  const loadStats=async()=>{

      const res=await api.get("/dashboard/stats");

      setStats(res.data.stats);

  }

  return(

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <DashboardCard

              title="Meals Saved"

              value={stats.mealsSaved}

              icon={<Package size={38}/>}

          />

          <DashboardCard

              title="Users"

              value={stats.users}

              icon={<Users size={38}/>}

          />

          <DashboardCard

              title="NGOs"

              value={stats.ngos}

              icon={<Building2 size={38}/>}

          />

          <DashboardCard

              title="Deliveries"

              value={stats.deliveries}

              icon={<Truck size={38}/>}

          />

      </div>

  )

}

export default StatsGrid;