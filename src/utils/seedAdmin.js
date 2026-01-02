import User from '../models/User.model.js';
import { appConfig } from '../config/appConfig.js';

export const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin already exists. Skipping seeding.');
      return;
    }

    const defaultAdmin = {
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'admin',
    };

    const user = await User.create(defaultAdmin);
    console.log(`✅ Default admin created: ${user.email}`);
  } catch (err) {
    console.error('❌ Error seeding admin:', err);
  }
};
