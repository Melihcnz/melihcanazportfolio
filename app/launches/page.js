import Layout from "../components/Layout";

export default function Launches() {
  return (
    <Layout>
      <div className="min-h-screen pt-32">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="mb-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-8 fade-in">Upcoming Launches</h1>
              <p className="text-xl text-muted mb-12 fade-in">
                Discover and participate in the most promising crypto projects before they hit the market.
              </p>
            </div>
          </section>

          {/* Active Launches */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12">Active Launches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Launch Card 1 */}
              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20"></div>
                    <div>
                      <h3 className="font-bold">MetaApe</h3>
                      <p className="text-sm text-muted">$MAPE</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">Live</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted mb-1">Raise Amount</p>
                    <p className="font-semibold">$500,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Token Price</p>
                    <p className="font-semibold">$0.05</p>
                  </div>
                  <div className="pt-4">
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-green-500/50"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-muted">Progress</span>
                      <span className="text-green-400">75%</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 px-6 py-2 rounded-full transition-all mt-4">
                    View Details
                  </button>
                </div>
              </div>

              {/* Launch Card 2 */}
              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20"></div>
                    <div>
                      <h3 className="font-bold">DeFiChain</h3>
                      <p className="text-sm text-muted">$DFC</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">Coming Soon</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted mb-1">Raise Amount</p>
                    <p className="font-semibold">$1,000,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Token Price</p>
                    <p className="font-semibold">$0.10</p>
                  </div>
                  <div className="pt-4">
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-green-500/50"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-muted">Starts In</span>
                      <span className="text-yellow-400">2 Days</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 px-6 py-2 rounded-full transition-all mt-4">
                    Set Reminder
                  </button>
                </div>
              </div>

              {/* Launch Card 3 */}
              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20"></div>
                    <div>
                      <h3 className="font-bold">GameFi Pro</h3>
                      <p className="text-sm text-muted">$GFP</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">Whitelist</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted mb-1">Raise Amount</p>
                    <p className="font-semibold">$750,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Token Price</p>
                    <p className="font-semibold">$0.08</p>
                  </div>
                  <div className="pt-4">
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-blue-500/50"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-muted">Whitelist Progress</span>
                      <span className="text-blue-400">25%</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 px-6 py-2 rounded-full transition-all mt-4">
                    Join Whitelist
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Past Launches */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12">Past Launches</h2>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-green-500/10">
                      <th className="text-left py-4 px-6 text-sm font-medium text-muted">Project</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-muted">Token</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-muted">Amount Raised</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-muted">ROI</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-muted">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-500/10">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20"></div>
                          <span className="font-medium">CryptoKitties</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">$KITTY</td>
                      <td className="py-4 px-6">$2,500,000</td>
                      <td className="py-4 px-6 text-green-400">+280%</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">Completed</span>
                      </td>
                    </tr>
                    <tr className="border-b border-green-500/10">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20"></div>
                          <span className="font-medium">MetaVerse</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">$META</td>
                      <td className="py-4 px-6">$1,800,000</td>
                      <td className="py-4 px-6 text-green-400">+150%</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 