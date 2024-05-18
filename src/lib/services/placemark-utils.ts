import type { Category, DataSet, Placemark } from "$lib/types/placemark-types";

// export function generateByMethod(placemarkList: Placemark[]): DataSet {
//   const totalByMethod: DataSet = {
//     labels: ["paypal", "direct"],
//     datasets: [
//       {
//         values: [0, 0]
//       }
//     ]
//   };

//   donationList.forEach((donation) => {
//     if (donation.method == "paypal") {
//       totalByMethod.datasets[0].values[0] += donation.amount;
//     } else if (donation.method == "direct") {
//       totalByMethod.datasets[0].values[1] += donation.amount;
//     }
//   });

//   return totalByMethod;
// }

export function generateByCategory(placemarks: Placemark[], categories: Category[]): DataSet {
  const placemarksByCategory: DataSet = {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  placemarksByCategory.labels = [];
    categories.forEach((category) => {
      placemarksByCategory.labels.push(`${category.name}`);
      placemarksByCategory.datasets[0].values.push(0);
  });

  categories.forEach((category, i) => {
    placemarks.forEach((placemark) => {
      if (typeof placemark.category !== "string") {
        if (placemark.category._id == category._id) {
          placemarksByCategory.datasets[0].values[i] += placemark.temperature;
        }
      }
    });
  });

  return placemarksByCategory;
}