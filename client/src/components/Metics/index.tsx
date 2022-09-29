import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";
import { AxisOptions } from "react-charts/types/types";
import { Box } from "../../styles/Box";
import { VBox } from "../../styles/VBox";

type Data = {
  guessKey: string; // 0 1 2 3 4
  count: number; // 0 - inf
};

type Series = {
  label: string;
  data: Data[];
};

const Metrics = () => {
  const [dataT, setData] = useState<Series[]>([
    { label: "0", data: [{ guessKey: "0", count: 1 }] },
  ]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + "/metrics")
      .then((response) => response.json())
      .then((metrics) => {
        let dataTemp: Series[] = [];

        for (let i = 0; i < 5; i++) {
          if (i === 4) {
            dataTemp.push({
              label: "Failed",
              data: [],
            });
          } else {
            dataTemp.push({
              label: "Got on try: " + (i + 1).toString(),
              data: [],
            });
          }
        }

        setCount(metrics.totalCount);
        metrics = metrics.data;

        Object.keys(metrics).map((metric: string) => {
          let map: any = {};

          for (let i = 0; i < 5; i++) {
            map[i] = 0.1;
          }

          metrics[metric].map((count: number) => {
            map[count] += 1;
          });

          console.log(map);

          Object.keys(map).map((key: any) => {
            console.log(key);
            dataTemp[key].data.push({
              guessKey: metric,
              count: map[key],
            });
          });
        });
        setData([...dataTemp]);
      });
  }, []);

  const primaryAxis = React.useMemo(
    (): AxisOptions<Data> => ({
      position: "left",
      getValue: (datum) => datum.guessKey,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<Data>[] => [
      {
        position: "bottom",
        getValue: (datum) => datum.count,
        min: 0,
      },
    ],
    []
  );

  return (
    <VBox style={{ alignSelf: "stretch", height: "inherit", margin: "20px" }}>
      <p style={{ color: "white" }}>Total Count: {count}</p>
      <Chart
        options={{
          data: dataT,
          primaryAxis,
          secondaryAxes,
          dark: true,
        }}
      />
    </VBox>
  );
};

export default Metrics;
