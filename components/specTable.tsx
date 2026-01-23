type Spec = {
  label: string;
  value: string;
};

type SpecTableProps = {
  specs: Spec[];
};

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <table className="w-full max-w-4xl border border-gray-300 text-sm md:text-base">
      <tbody className="[&>tr:nth-child(odd)]:bg-gray-100 [&>tr:nth-child(even)]:bg-white text-black">
        {specs.length === 0 ? (
          <tr>
            <td className="p-3 text-center ">Coming soon</td>
          </tr>
        ) : (
          specs.map((item, index) => (
            <tr
              key={index}
              className={index !== 0 ? "border-y border-gray-300" : ""}
            >
              <td className="p-3 font-semibold">{item.label}</td>
              <td className="p-3">{item.value}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
