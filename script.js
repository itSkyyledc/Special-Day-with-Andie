// Current page tracking
let currentPage = 1;
const totalPages = 3;

// Activity data with placeholders
const activityData = {
    brunch: {
        title: "🌸 Enchanted Morning Feast 🌸",
        icon: "🥐",
        time: "🕙 10:30 AM - 11:45 AM ✨",
        details: "Our fairy tale begins in a cozy castle where the most delicious treats await! Like Belle and Beast's magical breakfast, we'll share yummy food and sweet conversations to start our enchanted day together! 🏰💕",
        description: "Just like in the movies, every great love story starts with a perfect meal shared between two hearts! ✨ Customize with your magical brunch location details!"
    },
    activity1: {
        title: "✨ [Magical Activity 1] ✨",
        icon: "🧚‍♀️",
        time: "🕐 [Time] - When fairy magic happens ✨",
        details: "Like Cinderella getting ready for the ball, we'll experience something truly magical together! Pixie dust and wonderful moments await us in this enchanted adventure! 🧚‍♀️💫",
        description: "Every Disney princess has her special moment - this will be one of ours! ✨ Replace with your chosen magical activity details!"
    },
    activity2: {
        title: "💆‍♀️ [Dreamy Relaxation Time] 💆‍♀️",
        icon: "🌺",
        time: "🕐 [Time] - Royal pampering session 👑",
        details: "Just like Rapunzel in her tower, we'll be pampered like royalty! Gentle hands will help us feel like the prince and princess we are, relaxing in our own magical spa kingdom! 🏰✨",
        description: "Even fairy tale characters need their beauty rest! This is our royal spa time together! 💅👑"
    },
    activity3: {
        title: "🎲 [Playful Games & Giggles] 🎲",
        icon: "🎮",
        time: "🕐 [Time] - Fun in the kingdom! 🏰",
        details: "Like Alice's mad tea party, we'll play games and laugh until our cheeks hurt! In our cozy little kingdom, every game becomes an adventure and every giggle becomes a treasured memory! 🎭💕",
        description: "The best Disney moments are filled with laughter and joy - just like this will be! 🎉✨"
    },
    dinner: {
        title: "🍽️ Royal Feast in the Castle 🍽️",
        icon: "🏰",
        time: "🕕 6:00 PM - 7:30 PM - When dreams come true ✨",
        details: "Like Belle's enchanted dinner with Beast, we'll dine in a magical castle where fairy tale moments come to life! The most delicious feast awaits us, and who knows what magical surprises the evening might bring... 🌹👑",
        description: "Every Disney love story has that perfect dinner scene - this is ours! Customize with your royal dining location! 🏰✨"
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
    // Set your relationship start date here (August 15th, 2024 - adjust year as needed)
    const startDate = new Date('2025-08-15T00:00:00');
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
