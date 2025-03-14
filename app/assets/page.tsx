import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AssetsPage() {
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
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Criptomoedas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="rounded-xl bg-muted/50 p-4">
            <h2 className="mb-6 text-2xl font-bold">Lista de Criptomoedas</h2>
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
              {cryptoAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="flex items-center rounded-lg border p-4"
                >
                  <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                    {asset.symbol.substring(0, 1)}
                  </div>
                  <div>
                    <h3 className="font-medium">{asset.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {asset.symbol}
                      </span>
                      <span
                        className={`text-sm ${
                          asset.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {asset.change >= 0 ? "+" : ""}
                        {asset.change}%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-medium">
                      ${Number(asset.price).toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Market Cap: ${formatMarketCap(asset.marketCap)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const cryptoAssets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 65432.21,
    marketCap: 1251000000000,
    change: 2.34,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 3456.78,
    marketCap: 412000000000,
    change: 1.56,
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: 123.45,
    marketCap: 53000000000,
    change: -3.21,
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: 0.56,
    marketCap: 19600000000,
    change: 0.87,
  },
  {
    id: 5,
    name: "Polkadot",
    symbol: "DOT",
    price: 7.89,
    marketCap: 9800000000,
    change: -1.23,
  },
  {
    id: 6,
    name: "Avalanche",
    symbol: "AVAX",
    price: 34.56,
    marketCap: 12300000000,
    change: 4.56,
  },
];

function formatMarketCap(value: number): string {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else {
    return value.toFixed(0);
  }
}
