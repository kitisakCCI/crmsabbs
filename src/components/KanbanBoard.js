/* 2. KANBAN BOARD INTERACTIVE VIEW */
<div className="flex-1 min-h-0 grid grid-cols-5 gap-4 overflow-y-auto pr-1">
    {stages.map(stg => {
        const stageLeads = leads.filter(l => l.stage === stg);
        return (
            <div key={stg} className="bg-slate-100 rounded-xl p-3 border border-slate-200 flex flex-col h-full min-h-[400px]">
                <div className="flex items-center justify-between mb-3 shrink-0">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{stg}</span>
                    <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{stageLeads.length}</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                    {stageLeads.map(lead => (
                        <div
                            key={lead.id}
                            onClick={() => {
                                setSelectedLeadId(lead.id);
                                setIsViewModeKanban(false); // Switch to detail view when clicked
                            }}
                            className="bg-white p-3 rounded-lg border border-slate-200 hover:border-[#D32F2F] cursor-pointer transition shadow-sm hover:shadow"
                        >
                            <div className="flex justify-between items-start gap-1">
                                <h4 className="font-bold text-xs text-slate-800 line-clamp-1">{lead.contactName}</h4>
                                <span className="text-[9px] bg-red-50 text-red-600 px-1 rounded uppercase shrink-0">{lead.confidence}%</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{lead.company}</p>

                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">มูลค่า:</span>
                                <strong className="text-[#D32F2F]">{lead.value.toLocaleString()} ฿</strong>
                            </div>

                            {/* Simple move trigger buttons for mobile/tablet ease of touch */}
                            <div className="mt-2 flex gap-1 justify-end">
                                {stages.indexOf(stg) > 0 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const prevStage = stages[stages.indexOf(stg) - 1];
                                            updateLeadStage(lead.id, prevStage);
                                        }}
                                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px]"
                                        title="ย้ายกลับ"
                                    >
                                        ◀
                                    </button>
                                )}
                                {stages.indexOf(stg) < stages.length - 1 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const nextStage = stages[stages.indexOf(stg) + 1];
                                            updateLeadStage(lead.id, nextStage);
                                        }}
                                        className="p-1 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[10px]"
                                        title="ย้ายไปขั้นถัดไป"
                                    >
                                        ▶
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    })}
</div>