// Current page tracking
let currentPage = 1;
const totalPages = 3;

// Activity data with placeholders
const activityData = {
    brunch: {
        title: "☕ Coffee Project Castle ☕",
        icon: "🥐",
        time: "🕙 12:00 PM - 1:30 PM ✨",
        details: "Our fairy tale begins at Coffee Project! Like Belle and Beast's magical breakfast, we'll share delicious brunch treats and sweet conversations in this cozy, romantic setting. Perfect timing to start our enchanted day together! (Backup: Cafe Roo if you prefer!) 🏰💕",
        description: "Coffee Project offers the most magical brunch experience - from their signature coffee and pastries to cozy atmosphere, every moment feels like dining in a fairy tale castle! ✨"
    },
    activity1: {
        title: "🎬 Cinema76 Movie Kingdom 🎬",
        icon: "🎭",
        time: "🕐 2:00 PM - 4:10 PM ✨",
        details: "Like Cinderella at the royal ball, we'll enjoy a magical movie experience at Cinema76! In our cozy theater kingdom, we'll share popcorn, hold hands, and create beautiful memories watching stories unfold on the big screen! 🏰✨",
        description: "Cinema76 offers the most magical movie experience - with comfortable seats and great films, we'll have the perfect fairy tale afternoon being entertained together! 💫"
    },
    activity2: {
        title: "💆‍♀️ Massage 💆‍♀️",
        icon: "🌺",
        time: "🕐 4:10 PM - 5:00 PM 👑",
        details: "Just like Rapunzel in her tower, we'll be pampered like royalty at our magical spa! Gentle hands will help us feel like the prince and princess we are, relaxing in our own royal sanctuary after our movie adventure! 🏰✨",
        description: "Our spa sanctuary offers the most magical massage experience - perfect relaxation and pampering to prepare us for our grand finale dinner! 💫👑"
    },
    caferoo: {
        title: "🌸 Cafe Roo Alternative 🌸",
        icon: "☕",
        time: "🕐 12:00 PM - 1:30 PM ✨",
        details: "Like Belle and Beast's magical breakfast, we can start our fairy tale at Cafe Roo if you'd prefer to start a little later! This cozy castle offers the perfect romantic setting to begin our enchanted day together with delicious treats and sweet conversations! 🏰💕",
        description: "Cafe Roo offers a magical brunch experience - their cozy atmosphere and delicious menu make it the perfect alternative if you want to start our adventure at noon! ✨"
    },
    dinner: {
        title: "🍽️ Royal Feast at Wildflour Castle 🍽️",
        icon: "🏰",
        time: "🕕 6:00 PM - 8:00 PM - When dreams come true ✨",
        details: "Like Belle's enchanted dinner with Beast, we'll dine in the magical Wildflour Tomas Morato where fairy tale moments come to life! Their signature pasta, risotto, and desserts await us, and who knows what magical surprises the evening might bring... 🌹👑",
        description: "Wildflour Tomas Morato is the perfect fairy tale setting - their cozy atmosphere and delicious Italian cuisine will make this dinner feel like we're dining in a storybook castle! This is where our magical moment will unfold... 🏰✨"
    },
    surprise: {
        title: "🌟 A Magical Secret 🌟",
        icon: "🎁",
        time: "✨ When the stars align just right... 🌙",
        details: "Shhh... like Aladdin's magic carpet ride or Cinderella's midnight surprise, some enchantments can only happen when the moment is perfect! Our fairy tale has one more magical chapter waiting to unfold... 🪄💫",
        description: "Every Disney story has its most magical moment - ours is still a beautiful secret! 🤫✨👑"
    }
};

// Open the book
function openBook() {
    document.querySelector('.book-cover').style.display = 'none';
    document.querySelector('.book-pages').style.display = 'block';
    showPage(1);
}

// Page navigation
function showPage(pageNum) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show current page
    document.querySelector(`.page-${pageNum}`).classList.add('active');
    
    // Update page indicator
    document.getElementById('pageIndicator').textContent = `Page ${pageNum} of ${totalPages}`;
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.page-navigation .nav-btn:first-child');
    const nextBtn = document.querySelector('.page-navigation .nav-btn:last-child');
    
    prevBtn.disabled = pageNum === 1;
    nextBtn.disabled = pageNum === totalPages;
    
    currentPage = pageNum;
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Popup functionality
function showPopup(activityKey) {
    const activity = activityData[activityKey];
    if (!activity) return;
    
    // Populate popup content
    document.getElementById('popupTitle').textContent = activity.title;
    document.getElementById('popupIcon').textContent = activity.icon;
    document.getElementById('popupTime').textContent = activity.time;
    document.getElementById('popupDetails').textContent = activity.details;
    document.getElementById('popupDescription').textContent = activity.description;
    
    // Show popup
    document.getElementById('popupOverlay').classList.add('active');
    
    // Add magical entrance effect
    const popupContent = document.querySelector('.popup-content');
    popupContent.style.animation = 'none';
    setTimeout(() => {
        popupContent.style.animation = 'popupSlide 0.4s ease';
    }, 10);
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            previousPage();
            break;
        case 'ArrowRight':
            nextPage();
            break;
        case 'Escape':
            closePopup();
            break;
        case 'Enter':
            if (document.querySelector('.book-cover').style.display !== 'none') {
                openBook();
            }
            break;
    }
});

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '5';
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create floating Disney elements periodically
setInterval(createFloatingElement, 2500);

// Add floating Disney-style elements
function createFloatingElement() {
    const elements = ['💖', '✨', '🌟', '🌸', '🧚‍♀️', '👑', '🦋', '💫', '🌹', '💕'];
    const element = document.createElement('div');
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '100vh';
    element.style.fontSize = Math.random() * 15 + 15 + 'px';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '5';
    element.style.animation = `floatUp ${Math.random() * 4 + 3}s ease-out forwards`;
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 7000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .activity-card:hover .activity-icon {
        animation: bounce 0.6s ease-in-out;
    }
    
    .special-dinner:hover {
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    .surprise-card:hover {
        background: linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%);
    }
`;
document.head.appendChild(style);

// Simple mobile-friendly animations (no scrolling parallax)

// Relationship Timer Function
function updateRelationshipTimer() {
    // Set your relationship start date here - customize this to your exact moment!
    // Format: 'YYYY-MM-DDTHH:MM:SS' (24-hour format)
    // Examples:
    // '2024-08-15T14:30:00' = August 15th, 2024 at 2:30 PM
    // '2024-08-15T20:45:00' = August 15th, 2024 at 8:45 PM
    const startDate = new Date('2025-08-15T19:30:00'); // ← CHANGE THIS TO YOUR EXACT TIME!
    const now = new Date();
    
    // Calculate the difference in milliseconds
    const diffMs = now - startDate;
    
    // Convert to different time units
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    // Update the display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Photo upload functionality
function setupPhotoUploads() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the activity card popup
            
            // If photo already exists, show fullscreen on single click
            if (placeholder.classList.contains('has-photo')) {
                showFullscreen(placeholder);
                return;
            }
            
            // No photo exists, trigger upload
            triggerPhotoUpload(placeholder);
        });
    });
}

function triggerPhotoUpload(placeholder) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                
                // Set the background image
                placeholder.style.backgroundImage = `url(${imageUrl})`;
                placeholder.classList.add('has-photo');
                
                // Update the upload text
                const uploadText = placeholder.querySelector('.upload-text');
                if (uploadText) {
                    uploadText.textContent = 'Tap to view';
                }
                
                // Store the image in localStorage for persistence
                const photoId = placeholder.id;
                localStorage.setItem(photoId, imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}

// Load saved photos from localStorage
function loadSavedPhotos() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        const photoId = placeholder.id;
        const savedPhoto = localStorage.getItem(photoId);
        
        if (savedPhoto) {
            placeholder.style.backgroundImage = `url(${savedPhoto})`;
            placeholder.classList.add('has-photo');
            
            const uploadText = placeholder.querySelector('.upload-text');
            if (uploadText) {
                uploadText.textContent = 'Tap to view';
            }
        }
    });
}

// Fullscreen functionality
let currentPlaceholder = null;

function showFullscreen(placeholder) {
    const modal = document.getElementById('fullscreenModal');
    const image = document.getElementById('fullscreenImage');
    const info = document.getElementById('fullscreenInfo');
    
    // Store reference to current placeholder
    currentPlaceholder = placeholder;
    
    // Get the image URL from the placeholder's background
    const backgroundImage = placeholder.style.backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // Remove 'url("' and '")'
    
    // Set the image source
    image.src = imageUrl;
    
    // Set the info text based on the activity
    const activityTitle = placeholder.closest('.activity-card').querySelector('h3').textContent;
    info.textContent = `✨ ${activityTitle} Memory ✨`;
    
    // Show the modal
    modal.classList.add('active');
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('active');
    
    // Clear current placeholder reference
    currentPlaceholder = null;
    
    // Restore body scrolling
    document.body.style.overflow = '';
}

// Change photo from fullscreen
function changePhotoFromFullscreen() {
    if (!currentPlaceholder) return;
    
    // Trigger photo upload for the current placeholder
    triggerPhotoUpload(currentPlaceholder);
}

// Keyboard support for fullscreen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add a magical loading effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // Start the relationship timer
    updateRelationshipTimer();
    setInterval(updateRelationshipTimer, 1000); // Update every second
    
    // Setup photo upload functionality
    setupPhotoUploads();
    loadSavedPhotos();
    
    // No parallax needed for single-page mobile experience
    
    // Add click sound effect (optional - you can remove this if you don't want sound)
    const buttons = document.querySelectorAll('button, .activity-card');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // You can add a subtle click sound here if desired
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
        });
    });
});

// Add magical cursor trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Limit trail length
    if (mouseTrail.length > 10) {
        mouseTrail.shift();
    }
    
    // Create sparkle at mouse position occasionally
    if (Math.random() < 0.1) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'radial-gradient(circle, #ffd93d, transparent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.animation = 'sparkle-fade 0.8s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Add sparkle fade animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(sparkleStyle);
