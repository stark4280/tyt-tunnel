import { TAG_LABELS } from '../data/constants';

/**
 * WeakTopicMap - Zayıf konu frekans listesi
 */
export default function WeakTopicMap({ topics }) {
    if (!topics || topics.length === 0) {
        return (
            <p className="text-gray-600 text-sm">Henüz zayıf nokta kaydedilmedi 🎉</p>
        );
    }

    const maxCount = topics[0]?.[1] || 1;

    return (
        <div className="space-y-2 max-h-60 overflow-y-auto">
            {topics.slice(0, 8).map(([tag, count]) => (
                <div key={tag} className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">
                                {TAG_LABELS[tag] || tag}
                            </span>
                            <span className="text-gray-500 font-mono">{count}×</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all ${count / maxCount > 0.6 ? 'bg-red-500' :
                                        count / maxCount > 0.3 ? 'bg-yellow-500' : 'bg-blue-500'
                                    }`}
                                style={{ width: `${(count / maxCount) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
