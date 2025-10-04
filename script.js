// 美食数据
const cuisineData = {
    chinese: {
        title: "中华美食",
        description: "中华美食源远流长，拥有八大菜系，每一道菜都承载着深厚的文化底蕴。从川菜的麻辣鲜香到粤菜的清淡鲜美，从鲁菜的醇厚浓郁到苏菜的甜润细腻，中华美食以其丰富的层次和独特的烹饪技法闻名世界。",
        features: [
            "八大菜系各具特色",
            "千年传承的烹饪技艺",
            "注重食材的新鲜与搭配",
            "药食同源的养生理念"
        ],
        signature: [
            { name: "北京烤鸭", description: "皮脆肉嫩，肥而不腻" },
            { name: "麻婆豆腐", description: "麻辣鲜香，口感丰富" },
            { name: "小笼包", description: "皮薄汁多，鲜美可口" },
            { name: "宫保鸡丁", description: "酸甜微辣，经典川菜" }
        ],
        image: "icons/chinese-food.svg"
    },
    japanese: {
        title: "日式料理",
        description: "日式料理以其精致细腻的工艺和对食材本真味道的追求而著称。从寿司的简约美学到拉面的浓郁汤底，从天妇罗的酥脆口感到达摩的精致摆盘，日式料理体现了日本人对完美的执着追求。",
        features: [
            "追求食材的本真味道",
            "精致的摆盘艺术",
            "季节性食材的运用",
            "简约而不简单的美学"
        ],
        signature: [
            { name: "寿司", description: "新鲜鱼生配醋饭，简约之美" },
            { name: "拉面", description: "浓郁汤底配劲道面条" },
            { name: "天妇罗", description: "酥脆外衣包裹鲜美食材" },
            { name: "怀石料理", description: "季节性的精致料理艺术" }
        ],
        image: "icons/japanese-food.svg"
    },
    italian: {
        title: "意式美食",
        description: "意式美食以其简单而美味的特色闻名世界。从经典的意大利面到香浓的比萨饼，从浓郁的意式咖啡到精致的提拉米苏，意式美食体现了意大利人对生活的热爱和对美食的执着。",
        features: [
            "简单而美味的烹饪理念",
            "优质食材的运用",
            "地中海饮食文化",
            "家庭式烹饪传统"
        ],
        signature: [
            { name: "意大利面", description: "各种形状配浓郁酱汁" },
            { name: "比萨饼", description: "薄脆饼底配丰富配料" },
            { name: "意式咖啡", description: "浓郁香醇的咖啡文化" },
            { name: "提拉米苏", description: "经典的意式甜品" }
        ],
        image: "icons/italian-food.svg"
    },
    french: {
        title: "法式料理",
        description: "法式料理被誉为世界美食的标杆，以其精致优雅的烹饪艺术和复杂的制作工艺而著称。从鹅肝的奢华到蜗牛的经典，从马卡龙的甜美到红酒的醇香，法式料理体现了法国人对美食艺术的极致追求。",
        features: [
            "精致优雅的烹饪艺术",
            "复杂的制作工艺",
            "丰富的酱汁文化",
            "葡萄酒与美食的完美搭配"
        ],
        signature: [
            { name: "鹅肝", description: "奢华的法式经典美食" },
            { name: "蜗牛", description: "传统法式开胃菜" },
            { name: "马卡龙", description: "色彩缤纷的法式甜点" },
            { name: "红酒炖牛肉", description: "经典的法式主菜" }
        ],
        image: "icons/french-food.svg"
    },
    thai: {
        title: "泰式料理",
        description: "泰式料理以其酸辣甜香的完美平衡而闻名世界。从冬阴功汤的酸辣开胃到绿咖喱的香浓醇厚，从芒果糯米饭的甜美到泰式炒河粉的香辣，泰式料理体现了泰国人对味觉层次的精准把控。",
        features: [
            "酸辣甜香的完美平衡",
            "丰富的香料运用",
            "热带食材的巧妙搭配",
            "街头美食文化"
        ],
        signature: [
            { name: "冬阴功汤", description: "酸辣开胃的经典汤品" },
            { name: "绿咖喱", description: "香浓醇厚的咖喱料理" },
            { name: "芒果糯米饭", description: "甜美的泰式经典甜品" },
            { name: "泰式炒河粉", description: "香辣的经典主食" }
        ],
        image: "icons/thai-food.svg"
    },
    indian: {
        title: "印度料理",
        description: "印度料理以其丰富的香料层次和素食与肉食的完美融合而著称。从咖喱的浓郁香辣到馕饼的松软香甜，从印度奶茶的香浓到印度甜点的丰富，印度料理体现了印度文化的多元性和包容性。",
        features: [
            "丰富的香料层次",
            "素食与肉食的完美融合",
            "传统烹饪技法",
            "宗教文化的影响"
        ],
        signature: [
            { name: "咖喱", description: "浓郁香辣的经典料理" },
            { name: "馕饼", description: "松软香甜的传统主食" },
            { name: "印度奶茶", description: "香浓的经典饮品" },
            { name: "印度甜点", description: "丰富多样的传统甜品" }
        ],
        image: "icons/indian-food.svg"
    }
};

// DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('cuisineModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeModal();
});

// 导航功能
function initializeNavigation() {
    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接关闭移动端菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// 滚动效果
function initializeScrollEffects() {
    // 滚动时显示元素
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.cuisine-card, .gallery-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// 动画效果
function initializeAnimations() {
    // 美食卡片悬停效果
    const cuisineCards = document.querySelectorAll('.cuisine-card');
    cuisineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 画廊项目悬停效果
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 按钮点击效果
    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 模态框功能
function initializeModal() {
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// 显示美食详情
function showCuisineDetails(cuisineType) {
    const cuisine = cuisineData[cuisineType];
    if (!cuisine) return;

    modalBody.innerHTML = `
        <div class="cuisine-detail">
            <div class="detail-header">
                <img src="${cuisine.image}" alt="${cuisine.title}" class="detail-image">
                <div class="detail-info">
                    <h2>${cuisine.title}</h2>
                    <p class="detail-description">${cuisine.description}</p>
                </div>
            </div>
            
            <div class="detail-content">
                <div class="features-section">
                    <h3>特色亮点</h3>
                    <ul class="features-list">
                        ${cuisine.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="signature-section">
                    <h3>招牌美食</h3>
                    <div class="signature-grid">
                        ${cuisine.signature.map(dish => `
                            <div class="signature-item">
                                <h4>${dish.name}</h4>
                                <p>${dish.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 添加涟漪效果样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cuisine-detail {
        max-width: 100%;
    }
    
    .detail-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
        align-items: center;
    }
    
    .detail-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .detail-info h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 1rem;
    }
    
    .detail-description {
        font-size: 1.1rem;
        color: #7f8c8d;
        line-height: 1.8;
    }
    
    .detail-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    .features-section h3,
    .signature-section h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        color: #2c3e50;
        margin-bottom: 1rem;
    }
    
    .features-list {
        list-style: none;
        padding: 0;
    }
    
    .features-list li {
        padding: 0.5rem 0;
        color: #7f8c8d;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .features-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #d4af37;
        font-weight: bold;
    }
    
    .signature-grid {
        display: grid;
        gap: 1rem;
    }
    
    .signature-item {
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 10px;
        border-left: 4px solid #d4af37;
    }
    
    .signature-item h4 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .signature-item p {
        color: #7f8c8d;
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        .detail-header,
        .detail-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .detail-info h2 {
            font-size: 2rem;
        }
        
        .detail-image {
            height: 200px;
        }
    }
`;
document.head.appendChild(rippleStyle);

// 图片懒加载
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
const optimizedScrollHandler = debounce(function() {
    // 滚动相关的处理逻辑
}, 16); // 约60fps

window.addEventListener('scroll', optimizedScrollHandler);

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 添加加载完成的样式
    const loadStyle = document.createElement('style');
    loadStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadStyle);
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// 添加触摸设备样式
const touchStyle = document.createElement('style');
touchStyle.textContent = `
    .touch-device .cuisine-card:hover,
    .touch-device .gallery-item:hover {
        transform: none;
    }
    
    .touch-device .cuisine-card:active,
    .touch-device .gallery-item:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(touchStyle);
