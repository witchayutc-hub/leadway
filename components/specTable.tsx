type Spec = {
  label: string;
  value: string | number;
};

type SpecTableProps = {
  specs: Spec[];
};

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <table className="w-full max-w-4xl border border-gray-300 text-sm md:text-base">
      <tbody className="[&>tr:nth-child(odd)]:bg-gray-100 [&>tr:nth-child(even)]:bg-white text-black">
        {specs.map((item, index) => (
          <tr
            key={index}
            className={index !== 0 ? "border-y border-gray-300" : ""}
          >
            <td className="px-6 py-4 font-semibold">{item.label}</td>
            <td className="px-6 py-4">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
