import type { Category, DataSet, Placemark, User } from "$lib/types/placemark-types";

export function generateByUser(placemarks: Placemark[], users: User[]): DataSet {
  const placemarksByUser: DataSet = {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  placemarksByUser.labels = [];
    users.forEach((user) => {
      placemarksByUser.labels.push(`${user.firstName},${user.lastName}`);
      placemarksByUser.datasets[0].values.push(0);
  });

  users.forEach((user, i) => {
    placemarks.forEach((placemark) => {
      if (typeof placemark.user !== "string") {
        if (placemark.user._id == user._id) {
          placemarksByUser.datasets[0].values[i]++;
        }
      }
    });
  });

  return placemarksByUser;
}

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
          placemarksByCategory.datasets[0].values[i]++;
        }
      }
    });
  });

  return placemarksByCategory;
}

export function generateByTemperature(placemarks: Placemark[]): DataSet {
  const placemarksByTemperature: DataSet = {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  placemarks.forEach((placemark) => {
    placemarksByTemperature.labels.push(placemark.name);
    placemarksByTemperature.datasets[0].values.push(placemark.temperature);
  });

  return placemarksByTemperature;
}

export function sanitizeInput(input: string) {
  // Sanitize inputs from form field text
  const sanitizedInput = input.replace(/[^\w\s@._-]+/g, '');
  return sanitizedInput;
}