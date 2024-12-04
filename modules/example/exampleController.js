import { getExample, getExampleById, saveExample, updateExample, deleteExample } from "./exampleModel.js";

export async function index() {
  const data = await getExample();
  if (!data) {
    return {
      status: 404,
      message: "Data not found",
    };
  }

  return {
    status: 200,
    data: data,
  };
}

export async function store(req, reply) {
  try {
    const data = {
      example: req.body.example,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const dataExample = await saveExample(data);
    if (!dataExample) {
      return {
        status: 404,
        message: "Data not found",
      };
    }

    return {
      status: 200,
      message: "Data saved successfully",
      data: dataExample,
    }

  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
}


export async function update(req, reply) {
  try {
    const data = {
      example: req.body.example,
      updated_at: new Date(),
    }

    const dataExample = await updateExample(req.params.id, data);
    if (!dataExample) {
      return {
        status: 404,
        message: "Data not found",
      };
    }

    return {
      status: 200,
      message: "Data updated successfully",
      data: dataExample,
    }

  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    }
  }
}

export async function destroy(req, reply) {
  try {
    const dataExample = await deleteExample(req.params.id);
    if (!dataExample) {
      return {
        status: 404,
        message: "Data not found",
      };
    }

    return {
      status: 200,
      message: "Data deleted successfully",
      data: dataExample,
    }

  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    }
  }
}
