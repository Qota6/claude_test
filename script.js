// スムーズスクロール機能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // ヘッダーの高さを考慮
                behavior: 'smooth'
            });
        }
    });
});

// CTAボタンのイベント
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
}

// コンタクトフォームの送信処理
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームデータの取得
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // ここで通常はバックエンドにデータを送信します
        // 今回はデモなのでコンソールに出力します
        console.log('送信されたデータ:', { name, email, message });
        
        // 送信完了メッセージ
        alert('お問い合わせありがとうございます！（このデモではデータは送信されません）');
        
        // フォームをリセット
        contactForm.reset();
    });
}

// スクロール監視によるアニメーション
document.addEventListener('DOMContentLoaded', function() {
    // インターセクションオブザーバーを作成
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // 監視対象の要素を追加
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in'); // アニメーション用のクラスを追加
    });
});

// 現在の年を表示（フッター用）
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
});