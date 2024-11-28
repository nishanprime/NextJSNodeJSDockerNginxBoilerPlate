import { DemoEntity } from "../entity"

const initialData = async () => {
  const default_data = await DemoEntity.findOne({
    where: {
      id: 1,
    },
  });

  if (!default_data) {
    await DemoEntity.create({
      name: "default",
      description: "default description",
      isActive: true,
    }).save();
  }
};

export const initilizeDefaultData = async () => {
  await initialData();
};
