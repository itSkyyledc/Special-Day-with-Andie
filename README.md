# ✨ Magical Date Itinerary Website

A beautiful, fairy tale-themed website to present your special date itinerary. Perfect for romantic occasions and special moments!

## 🌟 Features

- **Fairy Tale Design**: Magical animations, floating hearts, sparkles, and enchanting effects
- **Interactive Book Format**: Navigate through your date like reading a storybook
- **Clickable Activities**: Each activity opens a detailed popup with customizable information
- **Responsive Design**: Looks beautiful on desktop, tablet, and mobile
- **Easy Customization**: All content uses placeholders that you can easily replace

## 🚀 Quick Deploy to Vercel

1. **Upload to GitHub** (or any Git provider):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your magical website will be live in minutes!

## ✏️ Customizing Your Content

### To customize the activities, edit the `activityData` object in `script.js`:

```javascript
const activityData = {
    brunch: {
        title: "Your Brunch Spot Name",
        time: "10:30 AM - 11:45 AM", 
        details: "Description of your brunch location...",
        description: "Special details about why you chose this place..."
    },
    // ... customize other activities
};
```

### Main areas to customize:

1. **Brunch Activity** (`brunch` key)
2. **Activity 1** (`activity1` key) - Could be massage, spa, etc.
3. **Activity 2** (`activity2` key) - Could be cafe time, relaxation
4. **Activity 3** (`activity3` key) - Could be board games, activities
5. **Dinner** (`dinner` key) - Your special dinner location
6. **Surprise** (`surprise` key) - The big moment and photo session

### Quick customization tips:

- Replace `[Restaurant Name]`, `[Activity Description]`, `[Time Placeholder]` with your actual details
- Update the restaurant name for dinner (currently set up for Wildflour)
- Customize the surprise section with hints about your special question
- Add specific times for each activity

## 🎨 Visual Effects

- Animated starry background
- Floating fairy lights
- Magical shimmer effects
- Interactive sparkles on mouse movement
- Floating hearts animation
- Page flip animations
- Gradient color schemes

## 📱 Mobile Friendly

The website is fully responsive and looks beautiful on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks needed
- **Google Fonts**: Dancing Script & Crimson Text for elegant typography
- **CSS Animations**: Smooth, magical effects throughout
- **Local Storage**: Could be extended to save customizations
- **SEO Ready**: Proper meta tags and structure

## 💝 Perfect For

- Marriage proposals
- Anniversary celebrations
- Special date announcements
- Romantic surprises
- Creating memorable moments

## 📝 License

MIT License - Feel free to customize and use for your special occasions!

---

*May your magical day be everything you dreamed it would be! ✨💖*
