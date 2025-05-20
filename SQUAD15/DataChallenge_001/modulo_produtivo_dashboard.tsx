import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Clock, AlertTriangle, CheckCircle, Calendar, ArrowUpCircle } from 'lucide-react'; //Tool, 

// Dados simulados da Xperiun Metalúrgica
const leadTimeData = [
  { mes: 'Jan', realizado: 21, planejado: 15 },
  { mes: 'Fev', realizado: 23, planejado: 15 },
  { mes: 'Mar', realizado: 20, planejado: 15 },
  { mes: 'Abr', realizado: 18, planejado: 15 },
  { mes: 'Mai', realizado: 16, planejado: 15 },
];

const setorData = [
  { nome: 'Corte', tempoMedio: 4.5, tempoIdeal: 3, retrabalho: 8 },
  { nome: 'Usinagem', tempoMedio: 9.2, tempoIdeal: 6, retrabalho: 15 },
  { nome: 'Solda', tempoMedio: 6.1, tempoIdeal: 5, retrabalho: 12 },
  { nome: 'Acabamento', tempoMedio: 3.8, tempoIdeal: 3, retrabalho: 6 },
  { nome: 'Inspeção', tempoMedio: 2.5, tempoIdeal: 2, retrabalho: 4 },
];

const cumpPrazoData = [
  { name: 'No prazo', value: 68 },
  { name: 'Atrasado', value: 32 },
];

const retrabPorMotivoData = [
  { name: 'Falha comunicação', value: 42 },
  { name: 'Falha equipamento', value: 28 },
  { name: 'Material inadequado', value: 18 },
  { name: 'Erro operacional', value: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
const COLORS_PRAZO = ['#00C49F', '#FF8042'];

// Componente principal do Dashboard
export default function DashboardModuloProdutivo() {
  const [activeTab, setActiveTab] = useState('visaoGeral');

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-700 text-white p-4">
        <h1 className="text-xl font-bold">Módulo Produtivo - Xperiun Metalúrgica</h1>
        <p className="text-sm opacity-80">Dashboard de performance da produção</p>
      </header>

      {/* Menu de navegação */}
      <nav className="bg-white shadow-md p-2">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'visaoGeral' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('visaoGeral')}>
            Visão Geral
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'tempoSetor' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('tempoSetor')}>
            Tempo por Setor
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'retrabalho' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('retrabalho')}>
            Análise de Retrabalho
          </button>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4">
        {/* Indicadores-chave de performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard 
            title="Lead Time Médio" 
            value="19.6 dias" 
            change="+30.7%" 
            trend="negative" 
            icon={<Clock size={24} />} 
            detail="Vs. 15 dias planejados" 
          />
          <MetricCard 
            title="Taxa de Retrabalho" 
            value="9.8%" 
            change="-2.1%" 
            trend="positive" 
            icon={<Clock size={24} />} 
            detail="Últimos 30 dias" 
          />
          <MetricCard 
            title="Cumprimento de Prazos" 
            value="68%" 
            change="+5%" 
            trend="positive" 
            icon={<Calendar size={24} />} 
            detail="Últimos 30 dias" 
          />
        </div>

        {/* Conteúdo das abas */}
        {activeTab === 'visaoGeral' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico de Lead Time */}
            <ChartCard title="Lead Time: Planejado vs. Realizado">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={leadTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis label={{ value: 'Dias', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="realizado" stroke="#FF8042" strokeWidth={2} name="Tempo Real" />
                  <Line type="monotone" dataKey="planejado" stroke="#0088FE" strokeWidth={2} name="Tempo Planejado" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Gráfico de Cumprimento de Prazos */}
            <ChartCard title="Cumprimento de Prazos">
              <div className="flex items-center justify-center h-full">
                <div className="w-64">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={cumpPrazoData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {cumpPrazoData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS_PRAZO[index % COLORS_PRAZO.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ChartCard>

            {/* Alertas e Insights */}
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <AlertTriangle className="mr-2 text-amber-500" size={20} /> 
                  Insights e Ações Recomendadas
                </h3>
                <div className="space-y-3">
                  <InsightCard 
                    title="Gargalo identificado no setor de Usinagem" 
                    description="Tempo médio 53% acima do planejado, afetando toda a cadeia produtiva."
                    action="Revisar capacidade do setor ou redistribuir carga de trabalho"
                  />
                  <InsightCard 
                    title="Falhas de comunicação causam 42% dos retrabalhos" 
                    description="Transferência inadequada de especificações entre setores resulta em erros."
                    action="Implementar checklist de verificação entre etapas produtivas"
                  />
                  <InsightCard 
                    title="Tendência de melhoria no cumprimento de prazos" 
                    description="Aumento de 5% em entregas no prazo nos últimos 30 dias."
                    action="Continuar monitoramento e reforçar práticas bem-sucedidas"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tempoSetor' && (
          <div className="grid grid-cols-1 gap-6">
            <ChartCard title="Tempo Médio por Setor: Real vs. Ideal">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={setorData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" label={{ value: 'Dias', position: 'insideBottom', offset: -5 }} />
                  <YAxis type="category" dataKey="nome" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="tempoMedio" name="Tempo Real" fill="#FF8042" />
                  <Bar dataKey="tempoIdeal" name="Tempo Ideal" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-3">Análise de Tempo por Setor</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left">Setor</th>
                      <th className="py-2 px-4 text-left">Tempo Real (dias)</th>
                      <th className="py-2 px-4 text-left">Tempo Ideal (dias)</th>
                      <th className="py-2 px-4 text-left">Variação (%)</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {setorData.map((setor, index) => {
                      const variacao = ((setor.tempoMedio - setor.tempoIdeal) / setor.tempoIdeal * 100).toFixed(1);
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-2 px-4">{setor.nome}</td>
                          <td className="py-2 px-4">{setor.tempoMedio}</td>
                          <td className="py-2 px-4">{setor.tempoIdeal}</td>
                          <td className="py-2 px-4">+{variacao}%</td>
                          <td className="py-2 px-4">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              variacao > 40 ? 'bg-red-100 text-red-700' : 
                              variacao > 20 ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-green-100 text-green-700'
                            }`}>
                              {
                                variacao > 40 ? 'Crítico' : 
                                variacao > 20 ? 'Atenção' : 
                                'Normal'
                              }
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'retrabalho' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard title="Taxa de Retrabalho por Setor">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={setorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nome" />
                  <YAxis label={{ value: 'Taxa (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="retrabalho" name="Taxa de Retrabalho (%)" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Causas de Retrabalho">
              <div className="flex items-center justify-center h-full">
                <div className="w-64">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={retrabPorMotivoData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {retrabPorMotivoData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ChartCard>

            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3">Plano de Ação para Redução de Retrabalho</h3>
                <div className="space-y-4">
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-medium">1. Implementar canal de comunicação digital entre setores</h4>
                    <p className="text-sm text-gray-600 mt-1">Substituir comunicação em papel por sistema digital integrado, garantindo acesso às especificações em tempo real.</p>
                  </div>
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-medium">2. Criar checklist de inspeção entre setores</h4>
                    <p className="text-sm text-gray-600 mt-1">Implementar verificação obrigatória ao transferir peças entre setores para garantir conformidade com especificações.</p>
                  </div>
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-medium">3. Realizar manutenção preventiva em equipamentos críticos</h4>
                    <p className="text-sm text-gray-600 mt-1">Estabelecer cronograma de manutenção preventiva para reduzir falhas de equipamento, especialmente no setor de Usinagem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Componente para cards de métricas
function MetricCard({ title, value, change, trend, icon, detail }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <div className="flex items-baseline">
            <h2 className="text-2xl font-bold">{value}</h2>
            <span className={`ml-2 text-sm ${trend === 'positive' ? 'text-green-500' : 'text-red-500'} flex items-center`}>
              {trend === 'positive' ? <ArrowUpCircle className="mr-1" size={14} /> : <ArrowUpCircle className="mr-1 transform rotate-180" size={14} />}
              {change}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{detail}</p>
        </div>
        <div className={`p-3 rounded-full ${trend === 'positive' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

// Componente para cards de gráficos
function ChartCard({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-700 mb-4">{title}</h3>
      {children}
    </div>
  );
}

// Componente para cards de insights
function InsightCard({ title, description, action }) {
  return (
    <div className="p-3 border-l-4 border-amber-500 bg-amber-50">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="flex items-center mt-2">
        <CheckCircle className="mr-2 text-green-500" size={16} />
        <p className="text-sm font-medium text-green-700">{action}</p>
      </div>
    </div>
  );
}