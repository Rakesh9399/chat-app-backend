export const uploadFile = async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    const fileUrl =`https://${req.get("host")}/uploads/${req.file.filename}`;

    res.status(200).json({
      success: true,
      fileUrl,
      fileName: req.file.originalname,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};