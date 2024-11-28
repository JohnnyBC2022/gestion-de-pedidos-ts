import type { Dispatch,SetStateAction } from "react";

const tipOptions = [
  { id: "tip-5", label: "5%", value: 0.05 },
  { id: "tip-10", label: "10%", value: 0.10 },
  { id: "tip-20", label: "20%", value: 0.20 },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
}

const TipPercentageForm = ({setTip} : TipPercentageFormProps) => {
  return (
    <div>
      <h2 className="font-black text-2xl pb-1">Propina:</h2>

      <form>
        {tipOptions.map(tip =>(
            <div key={tip.id} className="flex gap-2 items-center">
                <label htmlFor={tip.id}>
                    {tip.label}
                </label>
                <input
                    type="radio"
                    name="tip"
                    id={tip.id}
                    value={tip.value}
                    onChange={e=>setTip(+e.target.value)} // El + para convertir de string a número
                />
            </div>
        ))}
        
      </form>
    </div>
  );
};

export default TipPercentageForm;
