import mongoose from 'mongoose';

const VolunteerApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    why: { type: String, required: true, trim: true },
    meta: { type: Object },
  },
  { timestamps: true }
);

export default mongoose.models.VolunteerApplication || mongoose.model('VolunteerApplication', VolunteerApplicationSchema);


