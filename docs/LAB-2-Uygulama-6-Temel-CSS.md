# Uygulama-6: Temel CSS ile Stil Ver

Portföy sayfasını sadece HTML ile bırakmak yeterli değil; okunabilirlik ve kullanılabilirlik için minimal CSS ekle.

**Kaynak:** Web Tasarımı ve Programlama LAB-2

---

## İstenen stiller

### 1. Genel sıfırlama
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; line-height: 1.6; }
```
→ **Konum:** `src/index.css`

### 2. Skip link (normalde gizli, Tab ile görünür)
```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 100;
}
.skip-link:focus { top: 0; }
```
→ **Konum:** `src/App.css`

### 3. Focus göstergesi — ASLA kaldırma
```css
:focus { outline: 2px solid #2563eb; outline-offset: 2px; }
```
→ **Konum:** `src/App.css`

### 4. Form stilleri
```css
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 0.25rem; }
input, textarea, select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error-msg { color: red; font-size: 0.85rem; }
```
→ **Konum:** `src/App.css`

---

## Projede uygulama durumu

| Madde              | Dosya     | Durum |
|--------------------|-----------|--------|
| Genel sıfırlama    | index.css | ✅     |
| body               | index.css | ✅     |
| Skip link          | App.css   | ✅     |
| :focus             | App.css   | ✅     |
| .form-group        | App.css   | ✅     |
| label              | App.css   | ✅     |
| input, textarea, select | App.css | ✅     |
| .error-msg         | App.css   | ✅     |

**Sırada ne var?** Portföy sayfası hazır. Bir sonraki bölümde Chrome DevTools Lighthouse ile erişilebilirlik puanı ölçülecek.
