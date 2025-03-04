
import React from 'react';
import Header from '@/components/layout/Header';
import RecitationCard from '@/components/ui-custom/RecitationCard';
import CategoryCard from '@/components/ui-custom/CategoryCard';
import SectionTitle from '@/components/ui-custom/SectionTitle';
import FloatingPlayButton from '@/components/ui-custom/FloatingPlayButton';
import { BookOpen, Music, Sparkles, Heart, Star, BookMarked, Clock, User } from 'lucide-react';

const HomeScreen = () => {
  // Mock data for recitations
  const featuredRecitations = [
    {
      id: 1,
      title: "سورة الكهف",
      subtitle: "ماهر المعيقلي",
      imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "سورة الرحمن",
      subtitle: "عبد الباسط عبد الصمد",
      imageUrl: "https://images.unsplash.com/photo-1584286595398-37726c3d2cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "سورة يس",
      subtitle: "مشاري العفاسي",
      imageUrl: "https://images.unsplash.com/photo-1604669040290-94b2dbc9bb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const recommendedRecitations = [
    {
      id: 1,
      title: "سورة البقرة",
      subtitle: "ناصر القطامي",
      imageUrl: "https://images.unsplash.com/photo-1552308863-88c066739477?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "سورة آل عمران",
      subtitle: "سعد الغامدي",
      imageUrl: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "سورة النساء",
      subtitle: "عبد الرحمن السديس",
      imageUrl: "https://images.unsplash.com/photo-1551332772-7cfbd7a0f913?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "سورة المائدة",
      subtitle: "أحمد العجمي",
      imageUrl: "https://images.unsplash.com/photo-1610637258770-7b0294e5c77e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const aiPlaylist = [
    {
      id: 1,
      title: "سورة الملك",
      subtitle: "محمود خليل الحصري",
      imageUrl: "https://images.unsplash.com/photo-1516452391242-15b732d80d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "سورة الواقعة",
      subtitle: "محمد صدّيق المنشاوي",
      imageUrl: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "سورة الإنسان",
      subtitle: "إدريس أبكر",
      imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const categories = [
    { id: 1, title: "القرّاء المشهورون", icon: <User size={18} /> },
    { id: 2, title: "التلاوات المجوّدة", icon: <Music size={18} /> },
    { id: 3, title: "التلاوات الخاشعة", icon: <Heart size={18} /> },
    { id: 4, title: "السور المشهورة", icon: <Star size={18} /> },
    { id: 5, title: "تلاوات جزء عمّ", icon: <BookMarked size={18} /> },
    { id: 6, title: "التلاوات الحديثة", icon: <Clock size={18} /> }
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="container mx-auto px-4 max-w-7xl pt-20">
        {/* Featured Recitations */}
        <section className="mt-6">
          <SectionTitle 
            title="تلاوات مختارة لك" 
            subtitle="اختيارات مميزة من أفضل القراء"
            dir="rtl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredRecitations.map((item, index) => (
              <RecitationCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                index={index}
                featured={true}
                dir="rtl"
              />
            ))}
          </div>
        </section>
        
        {/* Categories */}
        <section className="mt-10">
          <SectionTitle 
            title="تصنيفات التلاوات" 
            dir="rtl"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                index={index}
                dir="rtl"
              />
            ))}
          </div>
        </section>
        
        {/* Recommended Recitations */}
        <section className="mt-10">
          <SectionTitle 
            title="اقتراحات لك" 
            subtitle="بناءًا على استماعك السابق"
            dir="rtl"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedRecitations.map((item, index) => (
              <RecitationCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                index={index}
                dir="rtl"
              />
            ))}
          </div>
        </section>
        
        {/* AI Suggested Playlist */}
        <section className="mt-10 mb-8">
          <SectionTitle 
            title="قائمة تشغيل مقترحة بالذكاء الاصطناعي" 
            dir="rtl"
            rightElement={<div className="bg-accent p-1 px-2 rounded-full text-xs flex items-center gap-1"><Sparkles size={12} className="text-primary" /> مخصص لك</div>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiPlaylist.map((item, index) => (
              <RecitationCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                index={index}
                dir="rtl"
              />
            ))}
          </div>
        </section>
      </main>
      
      {/* Floating Play Button */}
      <FloatingPlayButton 
        title="سورة البقرة"
        subtitle="ناصر القطامي"
      />
    </div>
  );
};

export default HomeScreen;
