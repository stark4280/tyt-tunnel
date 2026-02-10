import {
    ResponsiveContainer, LineChart, Line,
    XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid
} from 'recharts';

/**
 * NetChart - Günlük net trend grafiği
 */
export default function NetChart({ data, targetNet = 75 }) {
    if (!data || data.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-600 text-sm">
                Henüz yeterli veri yok
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis
                    dataKey="day"
                    stroke="#666"
                    fontSize={11}
                    tick={{ fill: '#666' }}
                />
                <YAxis
                    stroke="#666"
                    fontSize={11}
                    tick={{ fill: '#666' }}
                    domain={[0, 'auto']}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#111',
                        border: '1px solid #00ff00',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '13px'
                    }}
                />
                <ReferenceLine
                    y={targetNet}
                    stroke="#ff4444"
                    strokeDasharray="5 5"
                    label={{
                        value: `HEDEF: ${targetNet}`,
                        fill: '#ff4444',
                        fontSize: 11,
                        position: 'insideTopRight'
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="net"
                    stroke="#00ff00"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#00ff00', strokeWidth: 0 }}
                    activeDot={{ r: 5, fill: '#00ff00' }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
