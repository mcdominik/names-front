import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Nationality",
    },
  },
};

export function formatDataforNationalityChart(proxyResponse: any) {
  const labels: string[] =
    proxyResponse.data.nationalizeApiResponse.data.country.map(
      (country: any) => country.country_id
    );
  return {
    labels,
    datasets: [
      {
        label: "% Probability",
        data: proxyResponse.data.nationalizeApiResponse.data.country.map(
          (country: any) => country.probability * 100
        ),
        backgroundColor: "rgba(0, 99, 255, 0.5)",
      },
    ],
  };
}

export function NationalityChart(data: any) {
  return <Bar options={options} data={formatDataforNationalityChart(data)} />;
}
