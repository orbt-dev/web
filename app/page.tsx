"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  TrendingUp,
  TrendingDown,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  Bell,
  Download,
  Plus,
  ArrowUp,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  ReferenceLine,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// Portfolio performance data
const portfolioPerformanceData = [
  { month: "Jan", value: 36206, previousValue: 32000 },
  { month: "Feb", value: 40000, previousValue: 33400 },
  { month: "Mar", value: 43000, previousValue: 34500 },
  { month: "Apr", value: 45000, previousValue: 35200 },
  { month: "May", value: 51000, previousValue: 35800 },
  { month: "Jun", value: 55000, previousValue: 36000 },
  { month: "Jul", value: 58144, previousValue: 36206 },
  { month: "Aug", value: null, previousValue: null },
  { month: "Sep", value: null, previousValue: null },
  { month: "Oct", value: null, previousValue: null },
  { month: "Nov", value: null, previousValue: null },
  { month: "Dec", value: null, previousValue: null },
];

// Cryptocurrency data
const cryptoData = [
  {
    name: "Ethereum",
    symbol: "ETH/AUD",
    price: 4908,
    change: 1.4,
    selected: true,
    trend: "up",
  },
  {
    name: "Bitcoin",
    symbol: "BTC/AUD",
    price: 77603,
    change: 0.6,
    selected: false,
    trend: "up",
  },
  {
    name: "Cardano",
    symbol: "ADA/AUD",
    price: 2.97,
    change: -0.8,
    selected: true,
    trend: "down",
  },
  {
    name: "Litecoin",
    symbol: "LTC/AUD",
    price: 248.81,
    change: 3.2,
    selected: true,
    trend: "up",
  },
  {
    name: "Solana",
    symbol: "SOL/AUD",
    price: 201,
    change: 1.2,
    selected: false,
    trend: "up",
  },
  {
    name: "Ripple",
    symbol: "XRP/AUD",
    price: 1.516,
    change: 0.2,
    selected: false,
    trend: "up",
  },
];

// Price chart data
const priceChartData = [
  { date: "Jan", BTC: 45000, ETH: 3200, SOL: 140 },
  { date: "Feb", BTC: 47500, ETH: 3400, SOL: 160 },
  { date: "Mar", BTC: 50000, ETH: 3600, SOL: 180 },
  { date: "Apr", BTC: 48000, ETH: 3500, SOL: 170 },
  { date: "May", BTC: 52000, ETH: 3800, SOL: 200 },
  { date: "Jun", BTC: 54000, ETH: 4000, SOL: 220 },
];

const priceChartConfig = {
  BTC: {
    label: "Bitcoin",
    color: "hsl(var(--chart-1))",
  },
  ETH: {
    label: "Ethereum",
    color: "hsl(var(--chart-2))",
  },
  SOL: {
    label: "Solana",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

// Trading volume data
const volumeChartData = [
  { month: "Jan", buy: 12500, sell: 8200 },
  { month: "Feb", buy: 18700, sell: 14000 },
  { month: "Mar", buy: 15400, sell: 11300 },
  { month: "Apr", buy: 21000, sell: 15800 },
  { month: "May", buy: 19500, sell: 16200 },
  { month: "Jun", buy: 23400, sell: 18700 },
];

const volumeChartConfig = {
  buy: {
    label: "Buy Orders",
    color: "hsl(var(--chart-1))",
  },
  sell: {
    label: "Sell Orders",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// Portfolio distribution data
const portfolioData = [
  { name: "Bitcoin", value: 65, color: "#f7931a" },
  { name: "Ethereum", value: 20, color: "#627eea" },
  { name: "Solana", value: 10, color: "#00ffbd" },
  { name: "Others", value: 5, color: "#8884d8" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCryptoData = cryptoData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Painel</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 justify-between">
          {/* Header Section */}
          <div className="flex flex-col mb-6">
            <div className="text-left flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h1 className="text-3xl font-bold">Seu painel</h1>
                <p className="text-muted-foreground mt-1">
                  Acompanhe, gerencie e preveja seu portfólio.
                </p>
              </div>
              <div className="flex flex-row md:flex-row items-start gap-2 mt-4 md:mt-0 justify-start">
                <Button variant="ghost" size="sm">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="flex items-center gap-2" size="sm">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button className="flex items-center gap-2" size="sm">
                  <Plus className="h-4 w-4" />
                  Watchlist
                </Button>
              </div>
            </div>
          </div>

          {/* Portfolio Overview and Cryptocurrency List */}
          <div className="flex flex-col gap-4 xl:flex-row">
            {/* Portfolio Overview */}
            <Card className="flex-1 mb-6">
              <CardContent className="pt-6 flex h-full flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h2 className="text-4xl font-bold">R$ 58.144,80</h2>
                    <div className="flex items-center gap-1 mt-1 text-green-500">
                      <ArrowUp className="h-4 w-4" />
                      <span className="font-medium">R$ 2.264,12 (+3.89%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    {/* Buttons will stack on smaller screens */}
                    <Button variant="outline" size="sm">
                      1d
                    </Button>
                    <Button variant="ghost" size="sm">
                      7d
                    </Button>
                    <Button variant="ghost" size="sm">
                      30d
                    </Button>
                    <Button variant="ghost" size="sm">
                      6m
                    </Button>
                    <Button variant="ghost" size="sm">
                      12m
                    </Button>
                    <Button variant="ghost" size="sm">
                      max
                    </Button>
                  </div>
                </div>
                <div className="h-full mt-4 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={portfolioPerformanceData}
                      margin={{ left: 0, right: 10, top: 10, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        domain={["dataMin - 5000", "dataMax + 5000"]}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) =>
                          `R$${Math.floor(value / 1000)}k`
                        }
                        width={60}
                      />
                      <Tooltip
                        formatter={(value) => [
                          `R$${value.toLocaleString()}`,
                          "Value",
                        ]}
                        contentStyle={{
                          borderRadius: "8px",
                          background: "hsl(var(--card))",
                          borderColor: "hsl(var(--border))",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="previousValue"
                        stroke="hsl(var(--primary)/0.5)"
                        strokeWidth={2}
                        dot={false}
                      />
                      <ReferenceLine
                        x="Jul"
                        stroke="hsl(var(--border))"
                        strokeDasharray="3 3"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Cryptocurrency List */}
            <Card className="flex-1 mb-6">
              <CardHeader className="pb-1">
                <div className="flex items-center justify-between">
                  <CardTitle>{filteredCryptoData.length} moedas selecionadas</CardTitle>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="flex justify-between mb-6">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Aplicar filtros
                  </Button>
                  <div className="relative w-72">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-8"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Moeda</TableHead>
                        <TableHead>Preço (BRL)</TableHead>
                        <TableHead className="hidden sm:table-cell">Movimento</TableHead>
                        <TableHead className="hidden md:table-cell">Chart</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCryptoData.map((crypto) => (
                        <TableRow key={crypto.symbol}>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <img
                                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${
                                  crypto.symbol === "ETH/AUD"
                                    ? "1027"
                                    : crypto.symbol === "BTC/AUD"
                                    ? "1"
                                    : crypto.symbol === "ADA/AUD"
                                    ? "2010"
                                    : crypto.symbol === "LTC/AUD"
                                    ? "2"
                                    : crypto.symbol === "SOL/AUD"
                                    ? "5426"
                                    : crypto.symbol === "XRP/AUD"
                                    ? "52"
                                    : "0"
                                }.png`}
                                alt={crypto.name}
                                className="h-8 w-8 rounded-full"
                              />
                              <div className="min-w-0">
                                <div className="font-medium text-base truncate">
                                  {crypto.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {crypto.symbol}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            <div className="flex items-center space-x-1">
                              <span className="font-medium whitespace-nowrap">
                                R${Number(crypto.price).toLocaleString()}
                              </span>
                              <span className={`sm:hidden ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                                {crypto.change >= 0 ? "+" : ""}{crypto.change}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <div
                              className={`flex items-center ${
                                crypto.change >= 0
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {crypto.change >= 0 ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              {crypto.change >= 0 ? "+" : ""}
                              {crypto.change}%
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="h-10 w-24">
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                  data={[...Array(10)].map((_, i) => ({
                                    value:
                                      crypto.change >= 0
                                        ? 100 + Math.random() * i * 10
                                        : 200 - Math.random() * i * 10,
                                  }))}
                                >
                                  <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={
                                      crypto.change >= 0
                                        ? "hsl(var(--success))"
                                        : "hsl(var(--destructive))"
                                    }
                                    strokeWidth={2}
                                    dot={false}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1 sm:gap-2">
                              <Button variant="outline" size="sm" className="px-2 sm:px-3">
                                Sell
                              </Button>
                              <Button
                                size="sm"
                                className="bg-black text-white hover:bg-gray-800 px-2 sm:px-3"
                              >
                                Buy
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Portfolio Distribution Chart */}
            <Card>
              <CardHeader>
                <CardTitle>A alocação do Portfólio</CardTitle>
                <CardDescription>Distribuição Atual</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                      contentStyle={{
                        borderRadius: "8px",
                        background: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {portfolioData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ background: item.color }}
                      />
                      <div className="text-sm">
                        {item.name} ({item.value}%)
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trading Volume Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Volume de Negociação</CardTitle>
                <CardDescription>Janeiro - Junho 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={volumeChartConfig}>
                  <BarChart accessibilityLayer data={volumeChartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="buy" fill="var(--color-buy)" radius={4} />
                    <Bar dataKey="sell" fill="var(--color-sell)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Volume increased by 12.5%{" "}
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              </CardFooter>
            </Card>

            {/* Market Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade da Conta</CardTitle>
                <CardDescription>Janeiro - Junho 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}}>
                  <BarChart
                    data={[
                      { month: "Jan", value: 3000 },
                      { month: "Feb", value: 4000 },
                      { month: "Mar", value: 3500 },
                      { month: "Apr", value: 4500 },
                      { month: "May", value: 5000 },
                      { month: "Jun", value: 6000 },
                    ]}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar
                      dataKey="value"
                      fill="var(--color-activity)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
